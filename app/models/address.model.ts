export class Address {
    public Name : string;
    public StreetAddress : string;
    public City: string;
    public State: string;
    public ZipCode: string;
    public MobileNumber: string;
}

export class AddressResponse extends Address {
    public id : string;
}