---
layout: default
title: How to use raw JSON file
---

For what is JSON and its syntax, go to [JSON - Wikipedia](https://en.wikipedia.org/wiki/JSON)

## Key Mappings
a
Key mapping table of root (Object):

|Key|Type|Description|
|:---:|:---:|:---:|
|`count`|`Integer`|Count of objects in `data`|
|`last_update`|`String`|Date of last update of data in `yyyy-MM-dd` format|
|`data`|`Array`|Array of objects that contains students' infomations|

Key mapping table of objects in `data` (Array):

|Key|Type|Description|
|:---:|:---:|:---:|
|`id`|`Integer`|ID of this student|
|`name`|`String`|Name of this student|
|`pinyin`|`String`|Pinyin of `name`. Same with `name` if `name` is not in Chinese|
|`birthday`|`string`|Birthday of this student in `yyyyMMdd` format|
|`grade`|`Integer`|Grade of the student decided by the ID, may have several mistakes|
|`homeroom`|`String`|Homeroom of the student from Powerschool|
|`card_id`|`String`|ID of the student card of this student|
|`isBoarded`|`Boolean`|Does this student live in school dorm|
|`doStayAtSelfStudy`|`Boolean`|Does this student stay in school for night study|

## Example

An example in JavaScript

```javascript
// Assume 'data' is the given data
console.log(`Last updated in ${data.last_update} with ${data.count} data`);
console.log('Now printing data...');
for (let stud : data.data){
    console.log(`${stud.id} aka ${stud.name} (${stud.pinyin}) was born on ${stud.birthday}. He/she is currently studying in ${stud.classroom} in grade ${stud.grade}. His/her card id is ${stud.card_id}. He/she ${stud.isBoarded ? 'lives' : 'does not live'} in school dorm and ${stud.doStayAtSelfStudy ? 'stays' : 'does not stay'} in school for night study.`);
}
```