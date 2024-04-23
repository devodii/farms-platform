"use server";

import { nanoid } from "nanoid";
import { cookies } from "next/headers";

const api = process.env.API_URL;

export const createOrg = async (formdata: FormData) => {
  try {
    const userId = cookies()?.get("authId")?.value;

    if (!userId) return;

    const response = await fetch(api + `/organization`, {
      method: "POST",
      body: JSON.stringify({
        id: `org_${nanoid()}`,
        owner_id: userId,
        name: formdata.get("name"),
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });

    if (response.status === 201) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error: any) {
    console.log("An error occured", { error: error?.message });
  }
};

export const getOrganization = async () => {
  const userId = cookies()?.get("authId")?.value;

  if (!userId) return;
};
