
import InterestHomeSkeletonOne from "@/content/interestHomeSkeletonOne";
import InterestHomeSkeletonThree from "@/content/interestHomeSkeletonThree";
import InterestHomeSkeletonTwo from "@/content/interestHomeSkeletonTwo";
import React from "react";

type ComponentsProps = {
    search: string;
    [key: string]: any;
};

export const Components: React.FC<ComponentsProps> = ({ search, ...params }) => {
    const component: { [key: string]: React.ReactNode } = {
        InterestHomeSkeletonOne: <InterestHomeSkeletonOne />,
        InterestHomeSkeletonTwo: <InterestHomeSkeletonTwo />,
        InterestHomeSkeletonThree: <InterestHomeSkeletonThree />,
    };

    return component[search] || null;
};