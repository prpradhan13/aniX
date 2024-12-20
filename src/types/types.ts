export type ImgUrl = {
    imageUrl: string;
}

export type AnimeData = {
    _id: string;
    animeName: string;
    description: string;
    ratings: number;
    genres: string[];
    images: ImgUrl[];
}

export type ListCardProps = {
    listTitle: string;
    dataList: AnimeData[];
}