"use client"
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';

const Page = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchIssues = async () => {
      const querySnapshot = await getDocs(collection(db, 'Issues'));
      const issuesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setIssues(issuesList);
      setLoading(false)
    };

    fetchIssues();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        Loading...
      </div>
    );
  }

  if (!issues.length) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        No tutors found...
      </div>
    );
  }
  console.log(issues)

  return (
    <div>
      <h1>Issues</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>email</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <tr key={issue.id}>
              <td>{issue.studentId}</td>
              <td>{issue.title || "title"}</td>
              <td>{issue.issue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
