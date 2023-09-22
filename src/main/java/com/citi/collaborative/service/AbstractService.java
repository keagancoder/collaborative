package com.citi.collaborative.service;

import com.citi.collaborative.dao.IBaseDao;
import com.citi.collaborative.service.api.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;

/**
 * @author william
 * @title
 * @desc
 * @date 2023/9/22
 **/
public abstract class AbstractService<T> implements IBaseService<T> {

    private IBaseDao<T> baseDao;

    public boolean saveMany(T...targets){
        return baseDao.save(targets);
    }

    public boolean updateMany(T...targets){
        return baseDao.update(targets);
    }

    public Collection<T> findAll(){
        return baseDao.list(null);
    }

    @Autowired
    public void setBaseDao(IBaseDao<T> baseDao) {
        this.baseDao = baseDao;
    }
}
