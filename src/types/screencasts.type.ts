type RelatedDocs = {
  path: string;
  title: string;
};

export type Screencast = {
  description: string;
  duration: number;
  relatedDocs: RelatedDocs[];
  tile: string;
  title: string;
  youtubeId: string;
};
