// Implement "POJO" here to keep data of a single Product item.
/// <reference path='../refs.ts'/>

module auction.model {
    export class ProductModel {
        id:             string;
        title      :    string;
        thumb      :    string;
        description:    string;
        timeleft   :    number;
        watchers   :    number;
        price      :    number;
    }
}
