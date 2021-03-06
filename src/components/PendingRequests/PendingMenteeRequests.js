import React from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableDataTH,
  TableDataTD,
  TableDataTR
} from "../Shared/Pending.Styled";

const PendingMenteeRequests = props => {
  const requests = props.data;
  console.log("REQUESTSSS: ", requests);
  return (
    <div>
      <Table>
        <thead>
          <TableDataTR>
            <TableDataTH> Date sent</TableDataTH>
            <TableDataTH> Request receiver </TableDataTH>
            <TableDataTH> Mentor Profile</TableDataTH>
            <TableDataTH> Request Message </TableDataTH>
            <TableDataTH> What I need help with </TableDataTH>
            <TableDataTH> Status</TableDataTH>
          </TableDataTR>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map(request => (
              <TableDataTR key={request.requestId}>
                <TableDataTD>{request.createdAt.split("T")[0]}</TableDataTD>
                <TableDataTD>
                  <p>
                    {request.mentorFirstName} {request.mentorLastName}
                  </p>
                </TableDataTD>
                <TableDataTD>
                  <Link
                    to={`/profile/${request.mentorAccountType}/${
                      request.mentorId
                    }`}
                  >
                    View profile
                  </Link>
                </TableDataTD>
                <TableDataTD>{request.requestMessage}</TableDataTD>
                <TableDataTD>
                  <ul>
                    {request.cv ? <li>Resume or cover letter tips</li> : false}
                    {request.shadow ? <li>Job shadow opportunities</li> : false}
                    {request.interview ? <li>Mock Interviews</li> : false}
                    {request.job ? <li>Post job and internships</li> : false}
                    {request.postgrad ? (
                      <li>Post Graduate Application</li>
                    ) : (
                      false
                    )}
                    {request.career ? (
                      <li>Professional and career exploration</li>
                    ) : (
                      false
                    )}
                  </ul>
                </TableDataTD>
                <TableDataTD>{request.status}</TableDataTD>
              </TableDataTR>
            ))
          ) : (
            <TableDataTR>
              <TableDataTD>No pending applications</TableDataTD>
            </TableDataTR>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PendingMenteeRequests;
