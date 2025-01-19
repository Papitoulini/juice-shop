         import { retrieveCodeSnippet } from '../routes/vulnCodeSnippet'
         import colors from 'colors/safe';
import Diff from 'diff';
import * as fs from 'fs';
const fixesPath = 'data/static/codefixes';
const cacheFile = 'rsn/cache.json';
const data: CacheData = keys.reduce((prev, curr) => {
          if (part.added) {
            norm--
            continue
          }
          const prev = line
          line += part.count
          if (!(part.removed)) continue
          let temp = norm
          for (let i = 0; i < part.count; i++) {
            if (!snippet.vulnLines.includes(prev + i + 1 - norm) && !snippet.neutralLines.includes(prev + i + 1 - norm)) {
              process.stdout.write(colors.green(colors.inverse((prev + i + 1 - norm + ''))))
              process.stdout.write(' ')
              data[val].removed.push(prev + i + 1 - norm)
            } else if (snippet.vulnLines.includes(prev + i + 1 - norm)) {
              process.stdout.write(colors.green(colors.bold(prev + i + 1 - norm + ' ')))
            } else if (snippet.neutralLines.includes(prev + i + 1 - norm)) {
              process.stdout.write(colors.green(prev + i + 1 - norm + ' '))
            }
            temp++
          }
          norm = temp
        }
        process.stdout.write('\n')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return data
}

async function seePatch (file: string) {
  const fileData = fs.readFileSync(fixesPath + '/' + file).toString()
  const snippet = await retrieveCodeSnippet(file.split('_')[0])
  if (snippet == null) return
  const patch = Diff.structuredPatch(file, file, filterString(snippet.snippet), filterString(fileData))
  console.log(colors.bold(file + '\n'))
  for (const hunk of patch.hunks) {
    for (const line of hunk.lines) {
      if (line[0] === '-') {
        console.log(colors.red(line))
      } else if (line[0] === '+') {
        console.log(colors.green(line))
      } else {
        console.log(line)
      }
    }
  }
  console.log('---------------------------------------')
}

function checkData (data: CacheData, fileData: CacheData) {
  const filesWithDiff = []
  for (const key in data) {
    const fileDataValueAdded = fileData[key].added.sort((a, b) => a - b)
    const dataValueAdded = data[key].added.sort((a, b) => a - b)
    const fileDataValueRemoved = fileData[key].added.sort((a, b) => a - b)
    const dataValueAddedRemoved = data[key].added.sort((a, b) => a - b)
    if (fileDataValueAdded.length === dataValueAdded.length && fileDataValueRemoved.length === dataValueAddedRemoved.length) {
      if (!dataValueAdded.every((val: number, ind: number) => fileDataValueAdded[ind] === val)) {
        console.log(colors.red(key))
        filesWithDiff.push(key)
      }
      if (!dataValueAddedRemoved.every((val: number, ind: number) => fileDataValueRemoved[ind] === val)) {
        console.log(colors.red(key))
        filesWithDiff.push(key)
      }
    } else {
      console.log(colors.red(key))
      filesWithDiff.push(key)
    }
  }
  return filesWithDiff
}

export {
  checkDiffs,
  writeToFile,
  getDataFromFile,
  readFiles,
  seePatch,
  checkData
}
