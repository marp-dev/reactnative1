import { useState } from 'react';
import { Animated } from 'react-native';

export default () => {
    const [position] = useState(new Animated.Value(0));
   
    return [
        {
            props:{position},
            styles: {
                transform: [
                    {
                        translateX: position.interpolate({
                            inputRange: [-100, 0, 100],
                            outputRange: [-100, 0, 100]
                        })
                    }
                ],
                opacity: position.interpolate({
                  inputRange: [-100, 0, 100],
                  outputRange: [0, 1, 0]
                })
            }
        },
        {hideToLeft: (callback) => {
            Animated.timing(position, {
              toValue: -100,
              duration: 500
            }).start(callback);
        }}
    ];
}
