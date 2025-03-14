import { useState } from "react";


const roles = ["Super-Admin", "Admin", "Editor", "User"];
const permissions = ["View", "Edit", "Approve", "Decline", "Delete"];

const UserDataManagementSettings = ({rolePermissions, handleCheckboxChange, selected}) => {



	return (
		<section className={`w-full ${selected ? "" : 'hidden'}`}>
			<div className="DesktopScreen:block hidden text-holmes-primary-blue font-bold  p-2 px-4 rounded-md bg-holmes-background-light-grey">
				User Data Management
			</div>
            <div className="overflow-x-auto">
      <table className="table-auto w-full text-left">
        <thead>
          <tr >
            <th className="px-4 py-2"> </th>
            {permissions.map((permission) => (
              <th key={permission} className="px-4 py-2 text-holmes-font-light-grey text-center font-[200]">
                {permission}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-holmes-background-light-grey`}
            >
              <td className="px-4 py-4">{role}</td>
              {permissions.map((permission) => (
                <td key={permission} className="px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={rolePermissions[role][permission]}
                    onChange={() => handleCheckboxChange(role, permission)}
                    className="h-4 w-4 text-black rounded"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
		</section>
	);
};


export default UserDataManagementSettings;