export type PostResumedProps = {
  id: number;
  title: string;
  description: string;
  path: string;
  cover_image: string;
  social_image: string;
  user: {
    name: string;
    profile_image_90: string;
  };
  organization?: {
    name: string;
    profile_image_90: string;
  };
  url: string;
};
