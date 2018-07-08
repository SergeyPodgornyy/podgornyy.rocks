import "./utils/circles";
import {numberRange} from "./utils/utils";
import {colorGrey, colorGreen} from "../sass/_variables.scss";

const colors = Object.assign(...numberRange(1, 5).map(num => {
    return {[num]: [colorGrey, colorGreen]};
}));
const percentages = [80, 85, 65, 55];

for (let i = 1; i <= 5; i++) {
    const id = 'circles-' + i,
        percentage = percentages[i - 1];

    Circles.create({
        id,
        percentage,
        radius:     80,
        width:      10,
        number:     percentage,
        text:       '%',
        colors:     colors[i],
    });
}
