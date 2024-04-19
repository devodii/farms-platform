export type User = {
  id: string;
  first_name: string;
  last_name: string;
  name: string;
  title: string;
  about: string;
  emails: string[];
  photo: string;
  banner: string;
  website: string;
  phone: number;
  country: string;
  city: null;
  location: Record<string, any>;
  timezone: null;
  language: "en";
  urls: string[];
  creation_date: string;
  change_date: string;
  instance_id: null;
};

export type Organization = {
  id: number;
  name: string;
  owner_id: number;
  farms: Farm[];
};

export type Inventory = {
  id: number;
  farm_id: number;
  item_name: string;
  quantity: number;

  notes: string;
  created_at: string;
};

export type Farm = {
  id: number;
  name: string;
  location: string;
  owner_id: number;
  org_id: number;
  created_at: string;
};
