# 자바스크립트의 아주 기본적인 것부터,,, 그것은 바로 데이터타입

## 자바스크립트 데이터 타입  
자바스크립트의 데이터 타입은 크게 2가지로 나눌 수 있다.   
`기본 데이터 타입(Primitive Data Type)`과 `참조 데이터 타입(객체)`  
&nbsp;  

## 원시 타입(Primitives Type)  
- 객체가 아니며 메서드를 가지지 않는 기본 데이터(string, number, boolean, undefined, null, symbol)를 의미함.  
- 객체형과 달리 하나의 데이터만 담을 수 있음. (string은 문자만, number은 숫자만...)
- 모든 원시 타입은 기본 원시 타입 형태를 **유지**하고, `원시 래퍼 객체`를 만들어서 원시값이 메서드나 프로퍼티에 접근할 수 있도록 허용함. 
- 원시타입은 값(value)이 복사되어 전달됨(pass-by-value)
- 따라서 런타임(변수 할당 시점)에 메모리의 Stack 영역에 고정된 메모리 영역을 점유하고 저장된다.
&nbsp;  
&nbsp;  
## 참조 데이터 타입(Reference Type)(객체 타입)  
- 원시형과 달리 여러 데이터를 담을 수 있다.
- 기본 데이터 타입을 제외한 모든 값은 객체이다. 따라서 배열, 함수 등도 결국 객체.  
- 참조 타입의 중요한 특성이 있는데, 원시값과 달리, 실제 값이 아닌 **참조값**을 저장하고 복사한다는 점이다.(참조에 의한 전달)    

다음과 같이 변수에 객체를 할당하면, user 변수는 객체 자체를 그대로 저장하는 것이 아니라, 해당 객체를 가리키는 메모리상의 주소. 즉, 참조값을 저장한다는 것이다. 바로 그 주소가 user라는 변수에 할당되는 것. 따라서 객체가 할당된 변수를 복사할 때도 객체의 **참조값**이 복사된다.   
```javascript
let user = {
  name: "Mina"
};

let obj = user; // 객체 자체가 아닌 참조값이 복사됨
console.log(user.name); // Mina
console.log(obj.name); // Mina
```
obj와 user 변수는 동일 객체를 가리키는 참조값을 가지게 되므로 user.name과 obj.name의 값이 같게 된다.   
&nbsp;   
&nbsp;  
## 객체를 복사하되, 독립적인 객체를 만들고 싶다면?  
(해당 객체의 프로퍼티가 원시값인 경우) `for...in 문`과 `Object.assign` 를 활용하자.  
  - `for...in 문`은 객체에 포함된 모든 **프로퍼티**를 순회하면서 동작을 수행한다.  
  ```javascript
  let user = {
    name: "foo",
    age: 20,
  };
  let obj;
  for(obj in user){
    console.log(obj); // name // age
    console.log(user[obj]) // "foo" // 20
  ```
  
  - 대괄호 표기법을 응용하여 빈객체를 만들어서 user 객체를 독립적으로 복제할 수 있다.  
  ```javascript
  let user = {
    name: "foo",
    age: 20,
  };
  
  let clone = {};
  for(let itsKey in user){
    clone[itsKey] = user[itsKey];
  }
  console.log(clone); // {name: "foo", age: 20}
  
  clone.name = "yerin";
  console.log(clone); // {name: "yerin", age: 20}
  console.log(user); // {name: "foo", age: 20} 
  ```
  
  - `Object.assign`은 객체를 복사할 때 사용하는 메서드이다. 동일 프로퍼티가 존재할 경우 기존 값이 덮어씌워진다.  
  ```javascript
  let user = {
    name: "foo",
    age: 20,
  };
  let clone2 = Object.assign({}, user);
  console.log(clone2); // {name: "foo", age: 20}
  clone2.age = 25;
  console.log(clone2); // {name: "foo", age: 25}
  ```  
  
&nbsp;
&nbsp;
## 원시 래퍼 객체(object wrapper)
참조 데이터 타입의 한 종류로써, 객체가 아니지만 객체처럼 다룰 수 있는 데이터를 의미한다. 원시 타입에 따라 `String`, `Number`, `Boolean`, `Symbol`으로 부른다.  

예를 들어 문자열의 프로퍼티에 접근하려고 할 때,   
문자열은 원시 타입으로 존재하지만, 자바스크립트는 `new String`을 호출한 것처럼 문자열 값을 객체로 변환한다. 이러한 래퍼 객체는 프로퍼티를 참조할 때 생성되고, 프로퍼티 참조가 끝나면 사라진다.

```javascript
let str = "hello";
str.len = 5; //new String(str).len = 5
console.log(str.len); //undefined
```

변수의 프로퍼티에 접근할 때 래퍼 객체가 **임시로** 생성되고, 프로퍼티에 값을 할당하는 것은 일시적으로 생성된 래퍼 객체에 수행되므로 지속되지는 않는다.  
그러므로 다음 두 코드는 동일하다. 동일하지만, 자바스크립트가 자체적으로 객체로 변환해줄 수 있으므로 첫 번째 경우를 쓰는 게 간단하고 편함.

```javascript
let x = 3;
let x = new Number(3);
```  
&nbsp;  
&nbsp;

참조 :   
<https://velog.io/@kim-jaemin420/Wrapper-Object%EB%9E%98%ED%8D%BC-%EA%B0%9D%EC%B2%B4-jyt19oms>  
<https://developer.mozilla.org/ko/docs/Glossary/Primitive>  
<https://ko.javascript.info/object-copy>  
인사이드 자바스크립트(송형주, 고현준 지음. 2014)   
