p align="center">

  <h1 align="center">Check value empty - Code Tips #1</h1>

  <p align="center">
    This code explains why you should not use bang operators for checking if a value is empty.
</p>

## Description

While using TypeScript or JavaScript,
we often use the `bang` operator to check if a value is 'empty' or 'null' or 'undefined'.
This works sometimes, but it could introduce bugs you wouldn't want.
If you are building large-scale applications, this is something I would do to check if any given value is empty:

```

export const isEmptyData = (value: any): boolean => {
    if (value === null) {
        return true;
    } else if (typeof value !== 'number' && value === '') {
        return true;
    } else if (value === 'undefined' || value === undefined) {
        return true;
    } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
        return true;
    } else if (value !== null && Array.isArray(value) && !value.length) {
        return true;
    } else {
        return false;
    }
};

```

Advantages of using this `util` method,

- It can check any type of value like number, string, array or object.
- It follows the DRY pattern,
  where you can reuse this util method instead of writing the same conditions over and over again.
- Your code will be more readable using the util method.

Bonus tips for Angular:  
You can use the same util function and wrap it inside a `pipe` and use that in a template.

`pipe`

```

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any): boolean {
    return isEmptyData(value);
  }

}

```

`Template`

```

<div *ngIf="!(data | isEmpty)">
</div>

```

### Prerequisites

To get a local copy up and running follow these simple example steps.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/akkitheakhil/check-empty-code-tips-1.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the command
   ```sh
   npm start
   ```

<!-- CONTACT -->

## Contact

Akhil Padmanabhan Nair - speaktoakhilp@gmail.com <br />
Follow me on Linkedin for more tips: [Akhil Padmanabhan Nair](https://www.linkedin.com/in/akhilpadmanabhan/)
