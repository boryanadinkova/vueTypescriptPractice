import { Component, Prop, Vue } from "vue-property-decorator";

import "./UserDetails.scss";

@Component({})
export class AttributeList extends Vue {
  @Prop({ required: true })
  readonly attributes!: any;

  render() {
    return (
      <div class="attributeContainer itemContainer">
        <div class="attributeHeader row">
          <div class="attributeKey listItem">Attribute</div>
          <div class="attributeValue listItem">Value</div>
        </div>
        {this.transformAttributesList(this.attributes)}
      </div>
    );
  }

  private transformAttributesList(attributes: object) {
    return Object.entries(attributes).map(el => {
      const [key, value] = el;
      return (
        <div class="attrbuteContent row">
          <div class="attributeKey listItem">{key}</div>
          <div class="attributeValue listItem">{value}</div>
        </div>
      );
    });
  }
}
