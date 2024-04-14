export type User = {
  id: number;
  email: string;
  password: string;
  created_at: string;
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
