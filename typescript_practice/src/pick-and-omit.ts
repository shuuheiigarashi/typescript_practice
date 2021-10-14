export {};

type DetailedProfile = {
    name: string;
    height: string;
    weight: string;
}

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight' >;
type MySmallProfile = MyOmit;



