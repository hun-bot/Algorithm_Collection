import re
def to_camel_case(text):
  if len(text)==0: return ""
  regex=re.compile('\_|\-')
  first_str=text[0]
  new_str=re.sub(regex,' ',text).title().replace(' ','')
  if first_str==new_str[0]:
    return new_str
  else:
    new_str=new_str[0].lower()+new_str[1:]
    return new_str
  
to_camel_case("the_Stealth-Warrior")

def to_camel_case(text):
    removed = text.replace('-', ' ').replace('_', ' ').split()
    if len(removed) == 0:
        return ''
    return removed[0]+ ''.join([x.capitalize() for x in removed[1:]])
  
import re
def to_camel_case(text):
    return re.sub('[_-](.)', lambda x: x.group(1).upper(), text)