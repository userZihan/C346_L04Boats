import React from 'react';

import {ScrollView, Text} from 'react-native';
import Boat from './components/Boat';

class AllBoats extends React.Component {
  render() {
    return (
        <ScrollView>
            <Text></Text>
            <Text>
                GetABoat-For Sale
            </Text>

            <Boat name={'Sea Ray 500 Sundancer'}
                  desc={'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'}
                  images={require('./img/sea_ray.jpg')} />
            <Boat name={'Four Winns Horizon 180'} desc={'A sporty look and refined details truly set the Horizon 180 above all others.'} images={require('./img/four_winns.jpg')} />
            <Boat name={'Flipper 640 ST'} desc={'A modern take on the classic, traditional hardtop and perfect for a family picnic.'} images={require('./img/flipper.jpg')} />
            <Boat name={'Princess V48'} desc={'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'} images={require('./img/princess.jpg')} />
            <Boat name={'Bayliner 175 Bowrider'} desc={'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'} images={require('./img/bayliner.jpg')} />
            <Boat name={'Fairline Targa 47'} desc={'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'} images={require('./img/fairline.jpg')} />
        </ScrollView>
    )
  }
}

export default AllBoats;
