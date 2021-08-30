# Welcome to Approval Flow Task! 🤖

In this task we will build the the ❤️ functionality of [Approve.com](https://approve.com) - Approval Flow.

## 01 Background
The approval flow is the main part of our product that is used in purchase, vendor, contract, etc.

The approval flow consist of two parts:
 - Organizational Tree
 - Functional chain

**The approval flow is a path in organization tree + all nodes of functional chain.**

### Organizational Tree
Organization part of the approval flow is basically is hierarchy of the organization in json representation. Similar to this one:
```json
{
  "name": "A",
  "userId": "2",
  "title": "CEO",
  "email": "a@approve.com",
  "reportsToId": "",
  "children": [
    {
      "name": "B",
      "userId": "9",
      "title": "CTO",
      "email": "b@approve.com",
      "reportsToId": "2",
      "children": [
        {
          "name": "C",
          "userId": "19",
          "title": "VP R&D",
          "email": "c@approve.com",
          "reportsToId": "9",
          "children": [
            {
              "name": "D",
              "userId": "33",
              "title": "Full Stack Developer",
              "email": "d@approve.com",
              "reportsToId": "19"
            },
          ]
        },
        {
          "name": "E",
          "userId": "27",
          "title": "VP Product",
          "email": "e@approve.com",
          "reportsToId": "2",
          "children": [
            {
              "name": "F",
              "userId": "21",
              "title": "Product Designer",
              "email": "f@approve.com",
              "reportsToId": "27"
            }
          ]
        }
      ]
    }
  ]
}

```

### Functional chain
After the organizational part of the approval is over, there are usually some functional steps. For example, after approving the purchase of a monitor, procurement people should create an order.

In terms of a data structure, functional part of the flow is just a list of nodes.


## 02 Task

### Description
We are going to generate an approval flow for any user inside organization with given amount.

### Definition of Done ✅
1. Implement function `buildApprovalFlow` on the server.
    1. It receives request and response objects.
    2. Request object contains usedId from which the approval flow is initiated in the org tree and amount
    3. It should return the approval flow chain with the following interface:
      ```ts
      Array<{
        [name: string]: string, 
        [id: string]: string
      }>
      ```
2. Implement API call that given `userId` and `amount` will return the approval flow.
3. Render the nodes of the received approval flow.

### Bonus
#### Skip rule
Org tree always contain CEO. We don't want to bother them on every request. As a solution we would like to introduce "Skip rule". <br>
The rule is simple: given `userId` and `maxAmount`, it return a function which in turn receives purchase amount and  returns Boolean (`true` or `false`) whether the node should be skipped or not.

You should implement the rule and apply it inside `buildApprovalFlow` so that it will take into account the result of `skipRule`.

#### Users list
Now the the form where you need to type userId in the UI is an open input field. Very easy to make a mistake, isn't it? 🤷 <br/>
So we can improve it by showing the dropdown with usedId user title instead. 

You should implement dropdown in the UI that shows the list of people available in the org. When choosing a person from dropdown, we should pass its userId as in previous version.

## 03 Project
To run the project, you need to run server and client at the same time from 2 different terminals.

### Client
Client code is located in `client` folder. It's based on [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

### Server
Server is located in corresponding `server` folder. It has NodeJS, Python and Java implementations.

Files of `organization.json` and `functional.json` contain corresponding approval flow data structure.
