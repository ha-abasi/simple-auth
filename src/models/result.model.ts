import NameModel from "@/models/name.model";

export default interface ResultModel {
    gender: string;
    name: NameModel;
    email: string;
    phone: string;
    cell: string;
    nat: string;

    // I've omitted the rest of the properties for simplicity.
}