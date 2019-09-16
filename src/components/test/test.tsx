import { Component } from "@stencil/core";

@Component({
  tag: 'app-test'
})
export class Test {
  componentDidLoad() {
    console.log('test load')
  }
  componentDidUnload() {
    console.log('test unload')
  }
  render() {
    return new Date().getTime()
  }
}
