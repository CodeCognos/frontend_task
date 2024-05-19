import { useState } from "react";
import { Plus,Link,ArrowUpFromLine,Book } from "lucide-react";
import "./App.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


function App() {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <>
      <div className="bg-white container py-8">
        <div>
          <div className="flex gap-0 justify-between max-md:flex-wrap">
            <div className="my-auto text-lg font-bold leading-6 text-black max-md:max-w-full">
              Course builder
            </div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex gap-2 justify-center py-3.5 pr-2 pl-4 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-rose-700 rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dc5c2237fa8e56a9ba262081d46c72ae8e55603045bfb51d7a8536fef7ad7c2?apiKey=851b3b1857484826921ac8967993ad9f&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div>Add</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f72a299bae8c6b53ab3f9359a671e7498cdc5b626077f7126c0478eac788e006?apiKey=851b3b1857484826921ac8967993ad9f&"
                      className="shrink-0 w-5 aspect-square"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <div
                    className="flex gap-2 items-center"
                    >
                      <Book size={20} />
                      <div>
                        Create Module
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div
                    className="flex gap-2 items-center"
                    >
                      <Link size={20} />
                      <div>
                        Add a link
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div
                    className="flex gap-2 items-center"
                    >
                      <ArrowUpFromLine size={20} />
                      <div>
                        Upload
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div
        className="min-h-[700px]"
        >
          {
            isEmpty ? (
              <div className="min-h-[700px] w-full flex justify-center items-center">
                <EmptyState />
              </div> 
            ) : (
              <div>
                </div>
            )
          }

        </div>
      </div>
    </>
  );
}

export default App;


const EmptyState = () => {
  return(
    <div className="flex h-full flex-col gap-y-3 items-center">
    <img src="/Resources.png" alt="empty state" 
    // className="w-full h-full"
    />
    <div className="text-center">
      <div className="text-3xl font-bold mt-2">
      Nothing added here yet
      </div>
      <div className="text-gray-500 mt-2.5">
      Click on the [+] Add button to add items to this course
      </div>
      </div>
    </div>
  )
}