//! slider is created using  <input type="range" /> HTML element, which allows users to select a value from a range.
//! Props like min, max, step, value, and onChange are passed to configure and manage the slider's behavior.

//? in App.js create the handler function with the sliderValue


export const Slider = ({min, max, step, value, onChange}) => {
    return (
        <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    )
}
export default Slider;