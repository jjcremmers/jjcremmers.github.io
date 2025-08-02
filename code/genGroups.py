import json

def read_entries(filename):
    entries = []
    with open(filename, 'r') as file:
        for line in file:
            line = line.strip()
            if line:  # skip empty lines
                try:
                    entry = json.loads(line)
                    entries.append(entry)
                except json.JSONDecodeError as e:
                    print(f"Skipping invalid JSON line: {line}")
                    print(f"Error: {e}")
    return entries
    
fname = "group.txt"

data = read_entries(fname)

cat = ["curr","affil","prev"]

with open('../_pages/gallery2.md', 'w') as f:
    f.write("---\n")
    f.write("layout: default\n")
    f.write("title: Image Gallery\n")
    f.write("permalink: /gallery2/\n")
    f.write("toc:\n")
    f.write("  sidebar: left\n")
    f.write("---\n\n")    
  
    for c in cat:
        if c == "curr": 
            f.write("\n## Current members\n\n")
            f.write("PhD students currently in my group.\n\n")
        elif c == "affil":
            f.write("\n## Affiliated members\n\n")
            f.write("PhD students and Post-Docs that I supervise or collaborate with.\n\n")  
        else:
            f.write("\n## Former members\n\n")
            f.write("Former PhD students and Post-Docs that I supervised or collaborated with.\n\n")  

        f.write('<div class="container">\n')
        f.write('  <div class="row">\n')    
    
        for d in data:
            if d["stat"] == c:
                f.write('    <div class="col-md-4 col-12 mb-4 text-center">\n')
                f.write(f'     <img src="/assets/img/{d["pic"]}" class="img-fluid rounded shadow-sm" alt="{d["name"]}">\n')
                f.write('      <table class="table table-sm mt-2" style="text-align: left;">\n')
                f.write('        <tbody>\n')
                f.write('          <tr>\n')
                f.write(f'            <td colspan="2"><strong><a href="{d["link"]}">{d["name"]}</a></strong></td>\n')
                f.write('          </tr>\n')
                f.write('          <tr>\n')
                f.write('            <td style="white-space: nowrap;"><strong>Project</strong></td>\n')
                f.write(f'            <td><a href="/projects/{d["plink"]}/">{d["project"]}</a></td>\n')
                f.write('          </tr>\n')
                f.write('          <tr>\n')
                f.write('            <td style="white-space: nowrap;"><strong>Years:</strong></td>\n')
                f.write(f'            <td>{d["years"]}</td>\n')
                f.write('          </tr>\n')       
                f.write('        </tbody>\n')
                f.write('      </table>\n')
                f.write('    </div>\n')
            
        f.write('  </div>\n')
        f.write('</div>\n')
