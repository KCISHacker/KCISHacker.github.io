---
layout: default
title: Jekyll Theme Test
---

> A file to test Jekyll theme.

---

`Unicodes`:  
Ciallo～(∠・ω< )⌒★

*italic*  
**bold**  
~~score out~~

> Blockquote  
> ‘All the world’s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.’  
> *From As You Like It, Act 2, Scene 7, by Shakespeare*

# h1  
## h2  
### h3  

|head|column|
|:---:|:---:|
|1|2|

Picture:  
![kagami](/assets/img/stickers/lucky_star/kagami/laughing.jpg)

- 1
- 2
- 3
    1. 3-1
    2. 3-2
    3. 3-3
        - 3-3-1
        - 3-3-2
        - 3-3-3

#### Code blocks

*Theme: [Gruvbox Dark](https://github.com/morhetz/gruvbox)*  
*Highlighter: [Rouge](https://github.com/rouge-ruby/rouge)*  
*Font: [Caskaydia Cove](https://github.com/eliheuer/caskaydia-cove) (supports nerd font)*

```javascript
var str = "114514";
console.log(str);
```

More comprehensive C++ code preview:
```c++
#include <iostream>
#include <map>
using namespace std;
void printMap(map<char, int> m){  // cout map
    for (map<char, int>::iterator it = m.begin(); it != m.end(); it++)
        cout << it -> first << ": " << it -> second << endl;
}
int main(){ // A program that counts English characters in a sentence
    string input;
    map<char, int> cnt;
    cin >> input;
    for (char c : input){
        if (!(c >= 33 && c <= 126)) continue; // if c is a visible character
        cnt[c]++;
    }
    printMap(cnt);
    return 0;
}
```


#### Does not support latex
$f(x) = \frac{2x}{5} + x^3$

### Animations

<div data-aos="fade-up" data-aos-duration="1000" style="font-size: 50px">
    AOS Supported
</div>
<span class="typed" data-typed-items="typed.js supported, Make typing animation with typed.js"></span>