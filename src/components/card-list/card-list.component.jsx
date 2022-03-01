import React from 'react';
import './card-list.styles.css';

import { Card } from '../card/card.component';

export const CardList = props => (

    //console.log(props);
    <div className='card-list'>

        {
            //map return any function which we pass to it as it itereate over every object
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}

                // passing moster to card component 
                />
            )
            )

        }

    </div>

);