export type CardBirdTypes = {
  id: string;
  english_name?: string;
  latin_name?: string;
  thumb_url?: string;
  image_url?: string;
  notes?: Note[];
};

type Note = {
  id: string;
  comment: string;
  timestamp: number;
};
