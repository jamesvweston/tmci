import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import {client} from "./client";
import {Bookmark, CreateBookmark} from "../types";

export class BookmarksApi {

    public async list(): Promise<(axios: AxiosInstance, basePath: string) => AxiosPromise<Array<Bookmark>>> {
        return client.get('bookmarks')
    }

    public async create(request: CreateBookmark): Promise<(axios: AxiosInstance, basePath: string) => AxiosPromise<Bookmark>> {
        return client.post('bookmarks', request)
    }

    public async delete(request: Bookmark): Promise<(axios: AxiosInstance, basePath: string) => AxiosPromise<void>> {
        return client.delete(`bookmarks/${request.id}`)
    }

}