export interface FileModel{
    fileId: string,
    fileName: string,
    file: any
}
export interface FeaturesModel{
    icon:any,
     name:string,
     description:string,
}
export interface AddPageOptions {
      id: string,
      name: string,
      default: boolean,
}
export interface ItemsAddSignature {
    id: string,
    name:string,
    label:string,
    value:string,
    default:boolean,
}