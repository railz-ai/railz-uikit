---
title: Railz Text Input
---

# Text Inputs

**Text inputs** can be tricky elements to integrate, with a myriad of attributes for as multitude of use cases. The `<railz-input-text />`
component attempts to address many of the most common applications of a text input.

## Text Text Input Component

The **text-input** component can receive a long list of properties, but the only mandatory one is the `label`.

<!-- <railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" /> -->

```
<railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" />
```

## States and Variations

### Error

If an error message is passed to the input component, it will display an error state

<!-- <railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" errorMessage="Your address is incorrect" /> -->

```
<railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" errorMessage="Your address is incorrect" />`}`

```

### Input Types, Modes & Autocomplete

Choosing the correct type, inputmode, and autocomplete values is critical to providing users with a quality user experience. The effects are most visible on mobile
devices where the virtual keyboard can be customized to optimize input.

The`railz-input-text` component can receive all standard values for`type`,`inputmode`,`autocomplete`,
`pattern`,`min & max`. Check out the documentation on MDN for more details.

<!-- <railz-input-text label="Phone Number" placeholder="416-555-5555" type="tel" autocomplete="tel" inputmode="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /> -->

```
<railz-input-text label="Phone Number" placeholder="416-555-5555" type="tel" autocomplete="tel" inputmode="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />`}`
```

<!-- <img src="../assets/keyboard-tel.png" /> -->
<!-- <railz-input-text label="Email" placeholder="zach@railz.ai" type="email" autocomplete="email" /> -->

```
<railz-input-text label="Email" placeholder="zach@railz.ai" type="email"  autocomplete="email" />`}`
```

<!-- <img src="../assets/keyboard-email.png" />
<railz-input-text label="Contact name" placeholder="John Doe" type="text" autocomplete="name" /> -->

```
<railz-input-text label="Contact name" placeholder="John Doe" type="text"  autocomplete="name" />`}`
```

<!-- <img src="../assets/keyboard-name.png" />
<railz-input-text label="Decimal Amount" placeholder="47.5" inputmode="decimal" /> -->

```
<railz-input-text label="Decimal Amount" placeholder="47.5" inputmode="decimal" />`}`
```

<!-- <railz-input-text label="Number Amount" placeholder="47.5" inputmode="numeric" type="number" minNumber="-5" maxNumber="5" /> -->

```
<railz-input-text label="Number Amount" placeholder="47.5" inputmode="numeric" type="number" minNumber="-5" maxNumber="5" />`}`
```

<!-- <railz-input-text label="Company Website" placeholder="www.railz.ca" inputmode="url" type="url" /> -->

```
<railz-input-text label="Website" placeholder="www.railz.ca" inputmode="url" type="url" />`}`
```

## Adornments

The **text-input** component can also display prefix or suffix elements.

The adornments can either be text, icons, interactive elements, or basically any valid HTML.The prefix adornment is hidden unless the input is focused or filled. If
you need an icon to be visible at all times, consider using the`prefix-icon` property.

<!-- <railz-input-text label="Website" placeholder="345 Lichfeild" instructionalText="Enter your wesbite">
<span slot="prefix">https://</span>
<railz-icon icon="api_keys" slot="suffix" size="medium" />
</railz-input-text> -->

```
<railz-input-text label="Website" placeholder="345 Lichfeild" instructionalText="Enter your wesbite">
    <span slot="prefix">https://</span>
    <railz-icon icon="api_keys" slot="suffix" size="medium" />
</railz-input-text>
```

Specifying the **prefix-icon** is the easiest way to add an icon to the front of a text input. It will be size appropriately, and is styled to reflect
the state of the input.

<!-- <railz-input-text label="Bank Name" placeholder="TD Canada Trust" prefixIcon="banking" errorMessage="Thats not a bank">
<railz-button shape="pill" slot="suffix" label="Search" type="primary" size="small" />
</railz-input-text> -->

```
<railz-input-text label="Bank Name" placeholder="TD Canada Trust" prefixIcon="banking" errorMessage="Thats not a bank">
    <railz-button slot="suffix" label="Search" type="primary" size="small" />
</railz-input-text>
```

/./readme.md
