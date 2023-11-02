export interface PropsMovies {
    id:number,
    original_languaje?:string,
    title:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    vote_average:number,
    backdrop_path:string
}
export interface PropsDetail {
    id:number
    title:string
    overview:string
    popularity:number
    release_date:string
    poster_path:string
    backdrop_path:string
    vote_average:number
}
export interface PropsCrew{
    name:string
    profile_path:string
    known_for_department:string,
    character:string
}