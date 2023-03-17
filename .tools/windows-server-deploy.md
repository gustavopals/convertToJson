### STEP 1: CREATE A START.BAT FILE THAT CAN START NODE.JS

These start.bat files are different from site to site. This is my bat file:

```
git pull && npm run build && npm start
```

The .bat file is a replica of what I would have typed in myself in my command line or PowerShell in order to start the website manually.

### STEP 2: INSTALL A SERVICE USING NSSM

I have installed my NSSM in the C:\nssm folder on my server. And I have the website in the C:\website folder. Finally, I have a C:\logfiles folder to store logfiles. To setup NSSM, write the following:

```
C:\Nssm\win64\nssm.exe install Website-Service C:\website\start.bat
C:\Nssm\win64\nssm.exe set Website-Service AppDirectory C:\website\
C:\Nssm\win64\nssm.exe set Website-Service AppStdout D:\logfiles\out.txt
C:\Nssm\win64\nssm.exe set Website-Service AppStderr D:\logfiles\err.txt
```

1 - Install a service called Website-Service that runs the C:\website\start.bat file
2 - Set the local directory to C:\website\ (do not skip this step, or you might end up having access issues)
4 - Route whatever the command line outputs to the D:\logfiles\out.txt folder
5 - Route errors to the D:\logfiles\err.txt
