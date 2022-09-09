import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../components/spacer/spacer.component";
import { Text } from "../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Section,
  Rating,
  SectionEnd,
  Icon,
} from "./restaurant-info-card-styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.libbyshootsfood.com/wp-content/uploads/2017/02/Charcuterie-2-of-2.jpg",
      "https://sleeklens.com/wp-content/uploads/2016/08/DSC06051.jpg",
      "https://www.libbyshootsfood.com/wp-content/uploads/2017/02/Charcuterie-2-of-2.jpg",
      "https://www.libbyshootsfood.com/wp-content/uploads/2017/02/Charcuterie-2-of-2.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = 0,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            <Text variant="error">CLOSED TEMPORARILY</Text>
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
