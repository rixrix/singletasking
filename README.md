SingleTasking
=============

A dead simple, horribly easy, yes web-based, like a walk-in-the-park web todo app that lets you throw in your current task and forget about it at the end of the day. You just need the details anyway because, I would assume, you're using an existing awesome-cloud-based-company-wide-web-based-big-brother-sort-of-thing task management tool or timeshit to transfer your time logs.

![SingleTasking in Action](https://raw.github.com/rixrix/singletasking/master/public/images/singletasking-in-action.png?raw=true)

### Features

* No start button
* No end button
* When you add a task
** timer starts counting, without stopping
** well, until you add another task - it'll stop
* Display total hours, minutes or seconds you spent each task
* Delete a single or group of tasks

### Todo

* Editable task name
* Option to select the type of task eg. coding, water-cooler discussion, kill-the-time, meeting
* Graphs
* DB support
* Auto-focus text for quick typing of task
* Remove add button
* Display warning when the user hit the refresh button
* Mobile app
* Export task to JSON or CSV

### Warning

* Please don't suggest to add the start and stop button - it's one of the unique selling features

### Installation

* install `nodejs`, `git` (`homebrew install nodejs git`)
* `npm install singletasking -g`
* `singletasking`
* open your browser and go to [http://localhost:3000/](http://localhost:3000/)

### License

Copyright (c) 2013, Richard Sentino
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

  Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.