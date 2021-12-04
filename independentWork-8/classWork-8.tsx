import React, { ReactNode } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent

class ClassComponent extends React.Component<{ text: string }> {
  render() {
    return <div>{this.props.text}</div>;
  }
}

//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent

function FuncComponent(props: { text: string }) {
  return <div>{props.text}</div>;
}
//TODO: Перепешите компоненты выше на prop text
// в text передайте старые значения

//TODO: Создайте компонент ConditionalComponent
// который показыать GoogleLogoComponent по значению prop'a flag
class ConditionalComponent extends React.Component<{ flag: boolean }> {
  render() {
    if (this.props.flag) return <GoogleLogoComponent />;
  }
}
//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick
class ComponentWithFunction extends React.Component<{ f: () => void }> {
  render() {
    return <div onClick={this.props.f}>Кликни</div>;
  }
}
//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div
class ComponentWithChild extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent

class ComponentWithRenders extends React.Component<{
  func: React.FC
  comp: React.ComponentClass
}>{
  render() {
    return (<div>
      <this.props.func />
      <this.props.comp />
    </div>);
  }
}

const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}

//TODO: Добавьте component RenderAll
// export const RenderAll: React.FC = () => {
//   return <div>{/*Components here*/}</div>;
// };
export class RenderAll extends React.Component<{ timer: number }> {
  render() {
    return (
      <div>
        <ClassComponent text="ClassComponent" />
        <FuncComponent text="FuncComponent" />
        <ConditionalComponent flag={true} />
        <ComponentWithFunction f={func} />
        <ComponentWithChild>
          <div>
            <ClassComponent text="ClassComponent" />
            <FuncComponent text="FuncComponent" />
            <ConditionalComponent flag={true} />
            <ComponentWithFunction f={func} />
          </div>
        </ComponentWithChild>
        <ComponentWithRenders func={renderFunc} comp={TestComponent} />
        <div>Таймер: {this.props.timer}</div>
      </div>
    );
  }
}

// Добавьте prop timer и выведите его
