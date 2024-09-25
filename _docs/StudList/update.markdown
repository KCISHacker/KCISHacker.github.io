---
layout: default
title: Updating Scripts
---

## How to use

**Note: You will need Python to run the script**

Clone repo into directory:

```bash
git clone https://github.com/KCISHacker/StudListUpdater
cd StudListUpdater
```

Install requirements by running

```bash
python -m pip install -r requirements.txt
```

And then, run

```bash
python main.py
```

Select a mode:

```
StudListUpdater Python by @KCISHacker
Enter mode (generate: g, update: u, query: q):
```

Generate mode -> generate a brand new list
Update mode -> update old data
Query mode -> get a single data

### Generate Mode

After selecting generate mode, you will be asked to input:
| Question                       | Meaning                                     |
| ------------------------------ | ------------------------------------------- |
| min grade range                | the minimum of first two digit of the ID    |
| max grade range                | the maximum of first two digit of the ID    |
| min range                      | the minimum of the rest 3-4 digit of the ID |
| max range                      | the maximum of the rest 3-4 digit of the ID |
| min year for guessing birthday | the minimum year for guessing birthday      |
| max year for guessing birthday | the maximum year for guessing birthday      |

For example:

```
StudListUpdater Python by @KCISHacker
Enter mode (generate: g, update: u, query: q): g
Generate mode
Enter min grade range: 15
Enter max grade range: 16
Enter min range: 0
Enter max range: 1100
Enter min year for guessing birthday: 2008
Enter max year for guessing birthday: 2010
```

The program will run from 15000 to 151100 and then 16000 to 161100. The program will then get birthday by guessing XueWu password (Kskq%+birthday) from Kskq%20080101 to Kskq%20101231

After the operation, the program will ask where to save the result (as json file):

```
Save result to: data.json
Result saved to data.json
```

### Update Mode

Same as generate mode, but old file is required:

```
StudListUpdater Python by @KCISHacker
Enter mode (generate: g, update: u, query: q): u
Update mode
Enter min grade range: 16
Enter max grade range: 16
Enter min range: 0
Enter max range: 1100
Enter min year for guessing birthday: 2009
Enter max year for guessing birthday: 2010
Enter old file to be updated: old.json
```

`chinese_name`, `english_name`, `pinyin`, `homeroom`, `phone`, `card_id`, `is_boarded`, `do_stay_at_self_study` , and `active` will be updated after the operation

### Query Mode

Query for data by entering an ID, min year for guessing birthday, and max year for guessing birthday:

```
StudListUpdater Python by @KCISHacker
Enter mode (generate: g, update: u, query: q): q
Query mode
Enter id: xxxxx
Getting basic info for xxxxx
Result: {
    "chinese_name": "\uxxxx\uxxxx\uxxxx",
    "english_name": "XxxxxXxx",
    "homeroom": "xxx",
    "parent_name": "\uxxxx\uxxxx\uxxxx",
    "phone": "xxxxxxxxxxx"
}
Guessing birthday for xxxxx
Enter min_year: xxxx
Enter max_year: xxxx
Successfully found password for xxxx: Kskq%yyyyMMdd

Result: yyyyMMdd
Getting card for 16465
{
    "card_id": "xxxxxxxxxx",
    "is_boarded": true,
    "do_stay_at_self_study": true
}
```

