function fileNaming(names) {
        /*
        You are given an array of desired filenames in the order of their 
        creation. Since two files cannot have equal names, the one which 
        comes later will have an addition to its name in a form of (k), 
        where k is the smallest positive integer such that the obtained 
        name is not used yet.
        
        Return an array of names that will be given to the files.
        
        Example
        
        For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
        fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
        */
            // create a set 
            let s = new Set();
            
            // for each element in array check if its already in set
            // if not - then add it to set
            // if yes - then create counter and a temp string with (counter)
            // added. After that see if this temp string would exist already
            // and while it exist we keep change counter in that string until
            // finally it will be unique. Then add it. At the end we put all values
            // in array and return it
            for (let i of names)
            {
                let counter = 1;
                let position = 0;
                
                if (!s.has(i))
                        s.add(i);
                else
                    {
                        let counter = 1;
                        let attempt = i + '(' + counter + ')';
                        
                        while (s.has(attempt))
                            {
                                counter++
                                attempt = i + '(' + counter + ')';
                            }
                        s.add(attempt);
                    }
            }
            
            let rt = [];
            for (let i of s)
                    rt.push(i);
            return rt;
        
        }
