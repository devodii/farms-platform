"use server";

import { Organization } from "@/types";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const api = process.env.API_URL;

export const createOrg = async (name: string) => {
  try {
    const userId = cookies()?.get("authId")?.value;

    if (!userId) return;

    const response = await fetch(api + `/organization`, {
      method: "POST",
      body: JSON.stringify({
        id: `org_${nanoid()}`,
        owner_id: userId,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.log("An error occured", { error: error?.message });
    return { status: false };
  }
};

export const getOrganization = async () => {
  try {
    const userId = cookies()?.get("authId")?.value;

    if (!userId) return;

    const response = await fetch(api + `/organization?owner_id=eq.${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const organizations: Organization[] = await response.json();

    return organizations?.[0];
  } catch (error) {
    console.log("An error occured while fetching user organizations");
  }
};
