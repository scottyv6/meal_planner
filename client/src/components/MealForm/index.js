import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_MEAL } from '../../utils/mutations';

import Auth from '../../utils/auth';