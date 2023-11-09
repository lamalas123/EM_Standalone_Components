import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-standalone-benefits',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './standalone-benefits.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitComponent {
  title: string;
  paragraphs: string[];

  constructor() {
    this.title =
      "What are the benefits of standalone components and it's approach";
    this.paragraphs = [
      'By making NgModules optional, we reduce the amount of code that needs to be written. Instead of having to create both modules and components, you can simply work with components alone. This approach simplifies the learning process, as developers can focus on working with components alone, rather than having to grasp the intricacies of modules. This simplification also empowers components to import only what they need, making the development process more efficient and less complex.',
      'Their ability to isolate state. This means that each component can maintain its own state, separate from the rest of the application. This makes it much easier to manage the state of an application and ensures that the application remains in a consistent state at all times.',
      'They are self-contained, and that all their dependencies and inputs can be defined within the component, making it easier to understand and reason about the component’s functionality without having to look into other parts of the application, making them more reusable and also much easier to test them in isolation.',
    ];
  }
}
