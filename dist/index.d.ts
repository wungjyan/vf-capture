export interface Options {
    time?: number;
    width?: number;
    height?: number;
    base64?: {
        type: string;
        quality: number;
    };
}
declare function captureFrame(videoFile: File, options: Options): Promise<string | {
    blob: Blob;
    url: string;
}>;
export default captureFrame;
