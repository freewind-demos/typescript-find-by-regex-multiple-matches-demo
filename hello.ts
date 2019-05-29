const text = `
sdfdsf
dsfkdf[NAME:typescript]sdfdsf
dfdsfs[NAME:regex]sdfsdf
asdfdsfs
`

// Notice:
// the ending `g` is important, otherwise there will be infinite loop
const regex = /\[NAME:(.*?)]/g;

const names: string[] = []

while (true) {
  const match = regex.exec(text)
  if (match) {
    names.push(match[1])
  } else {
    break;
  }
}

console.log(names);
