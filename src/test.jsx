const Test = () =>{
    return(<>
    <div>
  <div>
    <div className="pb-2.5 mb-[15px] border-b-[3px] border-b-white block">
      <h1 className="border-0 pt-0 m-0 flex flex-row justify-start">
        <span className="text-main text-3xl font-normal text-ellipsis whitespace-nowrap overflow-hidden flex items-center">
          Travels
        </span>
        <span className="ml-auto">
          <div className="flex">
            <a
              href="/create-travel/<%=vehicle._id%>"
              className="my-2.5 border-[1px] border-main text-white bg-main rounded-[6px] text-[13px] h-9 inline-block leading-9 px-3 hover:shadow-addBtn"
            >
              Add New Travel
            </a>
          </div>
        </span>
      </h1>
    </div>
    <div className="overflow-y-auto">
      <table className="relative border-box m-0 text-[13px] w-full max-w-full h-full">
        <thead>
          <tr>
            <th
              scope="col"
              className="travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Name
            </th>
            <th
              scope="col"
              className="travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Destination
            </th>
            <th
              scope="col"
              className=" travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Date
            </th>
            <th
              scope="col"
              className="travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Duration
            </th>
            <th
              scope="col"
              className="travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Distance
            </th>
            <th
              scope="col"
              className="travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Status
            </th>
            <th
              scope="col"
              className="travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb]"
            >
              Memory Used
            </th>
            <th
              scope="col"
              className=" travel-table-heading text-left text-[13px] leading-5 font-bold text-white py-1 px-[5px] border-b-2 border-b-[#e8edeb] "
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              &lt;%=travel.name%&gt;
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              &lt;%=travel.destination%&gt;
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              &lt;%=travel.date.toString().slice(0,15)%&gt;
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              &lt;%=travel.duration%&gt;
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              &lt;%=travel.distance%&gt;
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              TBA
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              TBA
            </td>
            <td
              className="py-2.5 pr-5 pl-[5px] border-t-[1px] border-t-[#f4f6f6]"
              colSpan={1}
            >
              <button className="mr-0.5 bg-[rgb(232, 237, 235)] border-[1px] border-[rgb(193, 199, 198)] text-gray action-btn">
                <div className="grid grid-flow-col justify-center items-center h-full w-full relative px-2 gap-1.5">
                  <a href="">
                    <img src="/images/edit.png" alt="" />
                  </a>
                </div>
              </button>
              <span className="relative">
                <form action="/delete-travel" method="post">
                  <input
                    type="hidden"
                    name="travelId"
                    defaultValue="<%=travel._id%>"
                  />
                  <input
                    type="hidden"
                    name="vehicleId"
                    defaultValue="<%=vehicle._id%>"
                  />
                  <button className="mr-0.5 bg-[rgb(232, 237, 235)] border-1px border-[rgb(193, 199, 198)] text-gray action-btn">
                    <div className="grid grid-flow-col justify-center items-center h-full w-full relative px-2 gap-1.5">
                      <img src="/images/delete.png" alt="" />
                    </div>
                  </button>
                </form>
              </span>
              <span className="relative">
                <button
                  title="View Data"
                  className="mr-0.5 bg-[rgb(232, 237, 235)] border-1px border-[rgb(193, 199, 198)] text-gray action-btn"
                >
                  <div className="grid grid-flow-col justify-center items-center h-full w-full relative px-2 gap-1.5">
                    <a href="/travel-data/<%=vehicle._id%>?tId=<%=travel._id%>">
                      <img src="/images/eye.png" alt="" />
                    </a>
                  </div>
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>);
}

export default Test;