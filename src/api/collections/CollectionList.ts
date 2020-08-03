import BaseList, { GetPageInfo, MapQueryData } from "../../helpers/BaseList";
import { CollectionList as CollectionListQuery } from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";

export const COLLECTIONS_PER_API_CALL = 20;

export class CollectionList extends BaseList<
  CollectionListQuery,
  BaseCollection
> {
  getPageInfo: GetPageInfo<CollectionListQuery> = result =>
    result.data.collections?.pageInfo!;

  mapQueryData: MapQueryData<CollectionListQuery, BaseCollection> = data =>
    data.collections?.edges.map(({ node }) => node);
}