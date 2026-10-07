export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      coding_profiles: {
        Row: {
          user_id: string;
          leetcode_username: string | null;
          leetcode_verified: boolean | null;
          leetcode_verify_code: string | null;
          leetcode_rating: number | null;
          codeforces_username: string | null;
          codeforces_verified: boolean | null;
          codeforces_verify_code: string | null;
          codeforces_rating: number | null;
          updated_at: string | null;
        };
        Insert: {
          user_id: string;
          leetcode_username?: string | null;
          leetcode_verified?: boolean | null;
          leetcode_verify_code?: string | null;
          leetcode_rating?: number | null;
          codeforces_username?: string | null;
          codeforces_verified?: boolean | null;
          codeforces_verify_code?: string | null;
          codeforces_rating?: number | null;
          updated_at?: string | null;
        };
        Update: {
          user_id?: string;
          leetcode_username?: string | null;
          leetcode_verified?: boolean | null;
          leetcode_verify_code?: string | null;
          leetcode_rating?: number | null;
          codeforces_username?: string | null;
          codeforces_verified?: boolean | null;
          codeforces_verify_code?: string | null;
          codeforces_rating?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "coding_profiles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      blogs: {
        Row: {
          created_at: string;
          id: number;
          intro: string | null;
          title: string;
          writer: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          intro?: string | null;
          title: string;
          writer: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          intro?: string | null;
          title?: string;
          writer?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blogs_writer_fkey1";
            columns: ["writer"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      events: {
        Row: {
          creator: string;
          date: string;
          description: string | null;
          duration: number | null;
          host_link: string | null;
          hosted_registration: boolean | null;
          id: number;
          mode: boolean | null;
          name: string;
          register_until: string | null;
          registration_link: string | null;
          requirements: Json | null;
          venue: string | null;
          poster: File | null;
          venue_link: string | null; // New field
          convenors: Json | null; // New field
          prizes: Json | null; // New field
          winners: Json | null; // New field
        };
        Insert: {
          creator: string;
          date: string;
          description?: string | null;
          duration?: number | null;
          host_link?: string | null;
          hosted_registration?: boolean | null;
          id?: number;
          mode?: boolean | null;
          name: string;
          register_until?: string | null;
          registration_link?: string | null;
          requirements?: Json | null;
          venue?: string | null;
          poster?: File | null;
          venue_link?: string | null; // New field
          convenors?: Json | null; // New field
          prizes?: Json | null; // New field
          winners?: Json | null; // New field
        };
        Update: {
          creator?: string;
          date?: string;
          description?: string | null;
          duration?: number | null;
          host_link?: string | null;
          hosted_registration?: boolean | null;
          id?: number;
          mode?: boolean | null;
          name?: string;
          register_until?: string | null;
          registration_link?: string | null;
          requirements?: Json | null;
          venue?: string | null;
          poster?: File | null;
          venue_link?: string | null; // New field
          convenors?: Json | null; // New field
          prizes?: Json | null; // New field
          winners?: Json | null; // New field
        };
        Relationships: [
          {
            foreignKeyName: "events_creator_fkey";
            columns: ["creator"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      team: {
        Row: {
          about: string | null;
          expertise: Json | null;
          id: string;
          name: string;
          pfp: string | null;
          projects: Json | null;
          socials: Json | null;
        };
        Insert: {
          about?: string | null;
          expertise?: Json | null;
          id?: string;
          name: string;
          pfp?: string | null;
          projects?: Json | null;
          socials?: Json | null;
        };
        Update: {
          about?: string | null;
          expertise?: Json | null;
          id?: string;
          name?: string;
          pfp?: string | null;
          projects?: Json | null;
          socials?: Json | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          admin: boolean | null;
          id: string;
          username: string;
        };
        Insert: {
          admin?: boolean | null;
          id?: string;
          username: string;
        };
        Update: {
          admin?: boolean | null;
          id?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_username_exist: {
        Args: {
          username: string;
          user_id?: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends (PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends (PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends (PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends (PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
