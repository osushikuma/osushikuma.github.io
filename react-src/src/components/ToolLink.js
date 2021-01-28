import React from "react";

export default function ToolLink(props) {
  const getLink = (param) => {
    switch (param) {
      case "Adobe Photoshop":
        return "https://www.adobe.com/sea/products/photoshop.html";
      case "ASP.NET":
        return "https://dotnet.microsoft.com/apps/aspnet";
      case "Bitbucket":
        return "https://bitbucket.org/";
      case "Bootstrap":
        return "https://getbootstrap.com/";
      case "C#":
        return "https://docs.microsoft.com/en-us/dotnet/csharp/";
      case "CMS":
        return "https://en.wikipedia.org/wiki/Content_management_system";
      case "Confirmit":
        return "https://www.confirmit.com/";
      case "Confluence":
        return "https://www.atlassian.com/software/confluence";
      case "CSS":
        return "https://www.w3.org/Style/CSS/Overview.en.html";
      case "DataMaps":
        return "https://datamaps.github.io/";
      case "DataTables":
        return "https://datatables.net/";
      case "Dynatable":
        return "https://github.com/alfajango/jquery-dynatable";
      case "Foundation":
        return "https://get.foundation/";
      case "Git":
        return "https://git-scm.com/";
      case "JIRA":
        return "https://www.atlassian.com/software/jira";
      case "HTML":
        return "https://developer.mozilla.org/en-US/docs/Web/HTML";
      case "JavaScript":
        return "https://www.javascript.com/";
      case "jQuery":
        return "https://jquery.com/";
      case "LESS SCSS":
        return "http://lesscss.org/";
      case "Material-UI":
        return "https://material-ui.com/";
      case "Microsoft Excel":
        return "https://www.microsoft.com/en-us/microsoft-365/excel";
      case "Microsoft Access":
        return "https://www.microsoft.com/en-us/microsoft-365/access";
      case "MVC":
        return "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller";
      case "Razor":
        return "https://docs.microsoft.com/en-us/aspnet/web-pages/overview/getting-started/introducing-razor-syntax-c";
      case "React":
        return "https://reactjs.org/";
      case "SASS":
        return "https://sass-lang.com/";
      case "Selectize":
        return "https://selectize.github.io/selectize.js/";
      case "Slack":
        return "https://slack.com/intl/en-ph/";
      case "SQL":
        return "https://www.microsoft.com/en-us/sql-server/sql-server-2019";
      case "Tooltwist":
        return "https://tooltwist.com/";
      case "Trello":
        return "https://trello.com/en";
      case "webpack":
        return "https://webpack.js.org/";
      case "WooThemes":
        return "https://profiles.wordpress.org/woothemes/";
      case "Wordpress":
        return "https://wordpress.com/";
      default:
        return "#";
    }
  };

  return (
    <a rel="noreferrer" href={getLink(props.children)} target="_blank">
      <strong>{props.children}</strong>
    </a>
  );
}
