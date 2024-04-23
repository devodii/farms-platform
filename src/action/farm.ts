"use server";

import { Farm } from "@/types";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const api = process.env.API_URL;

export const createFarm = async (formdata: FormData) => {
  const userId = cookies()?.get("authId")?.value;

  if (!userId) return;

  const response = await fetch(api + `/farm`, {
    method: "POST",
    body: JSON.stringify({
      id: `farm_${nanoid()}`,
      org_id: formdata.get("org_id"),
      name: formdata.get("name"),
      location: formdata.get("location"),
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
  revalidatePath("/dashboard");
  if (response.status === 201) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export const getFarms = async (organizationId: string) => {
  try {
    if (!organizationId) return;

    const response = await fetch(api + `/farm?org_id=eq.${organizationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const farms: Farm[] = await response.json();

    return farms;
  } catch (error) {
    console.log("An error occured while fetching farms", { error });
  }
};
