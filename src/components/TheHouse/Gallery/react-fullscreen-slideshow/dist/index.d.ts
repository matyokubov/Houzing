import * as React from "react";
import "./styles.scss";
interface image {
    image: string;
    caption: string;
    description?: string;
}
interface ReactFullscreenSlideshowProps {
    images: image[];
    title: string;
    cycle?: boolean;
    currentSlideIndex?: number;
    BannerImgIndex?: number;
    width?: string;
    height?: string;
    thumbnailsToBeDisplayed?: number;
    maxViewAllThumbnailsPerRow?: number;
    displayOverlay?: boolean;
    displayPreviewBanner?: boolean;
}
interface ReactFullscreenSlideshowState {
    modalDisplay: string;
    viewAllmodalDisplay: string;
    currentSlideIndex: number;
    currentThumbNails: JSX.Element[] | null;
    allThumbNails: JSX.Element[] | null;
    leftArrowDisplay: string;
    rightArrowDisplay: string;
    modalClass: string;
}
export default class ReactFullscreenSlideshow extends React.Component<ReactFullscreenSlideshowProps, ReactFullscreenSlideshowState> {
    static defaultProps: {
        cycle: boolean;
        currentSlideIndex: number;
        width: string;
        height: string;
        thumbnailsToBeDisplayed: number;
        maxViewAllThumbnailsPerRow: number;
        BannerImgIndex: number;
        displayOverlay: boolean;
        displayPreviewBanner: boolean;
    };
    imagesCount: number;
    photosIcon: string;
    constructor(props: ReactFullscreenSlideshowProps);
    openModal(): void;
    openViewAllModal(): void;
    closeModal(): void;
    closeViewAllModal(): void;
    trackArrowColor(): void;
    nextSlide(): void;
    prevSlide(): void;
    viewCurrentThumbnail(thumbnailIndex: number): void;
    constructThumbnails(): void;
    constructViewAllThumbnails(): void;
    handleKeyDown(event: KeyboardEvent): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
