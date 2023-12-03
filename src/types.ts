export type data = {
        id: number;
        name: string;
        location: string;
        charge_customers: boolean;
        business_type: string;
        display_amount: boolean;
        amount: {
          category_6: string;
          category_7: string;
          category_8: string;
          category_9: string;
          category_10: string;
        };
};

export type allData = {
  data : data;
}


